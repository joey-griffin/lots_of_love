using System;
using System.Threading.Tasks;
using api.Models;
using MailKit.Net.Smtp;
using MimeKit;

namespace api.Services
{
    public sealed class ReviewService : IReviewService
    {
        public async Task SubmitReviewAsync(Review review)
        {
            await SendEmailToSelfAsync(review);

            if (!string.IsNullOrEmpty(review.Email))
            {
                await SendEmailToReviewerAsync(review.Email);
            }
        }

        private async Task SendEmailAsync(MimeMessage message)
        {
            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.gmail.com", 587, false);
                await client.AuthenticateAsync(GlobalSettings.GmailUsername, GlobalSettings.GmailPassword);

                await client.SendAsync(message);
                await client.DisconnectAsync(true);
            }
        }

        private async Task SendEmailToReviewerAsync(string email)
        {
            var formattedEmail = email.Trim();

            try
            {
                var addr = new System.Net.Mail.MailAddress(formattedEmail);
            }
            catch
            {
                throw new ArgumentException($"Invalid email {formattedEmail}");
            }

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Really Crap", "really.crap.ceo@gmail.com"));
            message.To.Add(new MailboxAddress("Crap Fighter", formattedEmail));
            message.Subject = "Thanks for taking the time";

            message.Body = new TextPart("plain")
            {
                Text = @"Hi there,
                
Your submission is being reviewed, and will be published shortly. 

Thanks for fighting against all things crap.

Sincerely,
RC"
            };

            await SendEmailAsync(message);
        }

        private async Task SendEmailToSelfAsync(Review review)
        {
            var reviewerEmail = string.IsNullOrEmpty(review.Email) ? "<no email>" : review.Email.Trim();

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Really Crap", "really.crap.ceo@gmail.com"));
            message.To.Add(new MailboxAddress("Really Crap", "really.crap.ceo@gmail.com"));
            message.Subject = $"[Review] {review.Title}";

            message.Body = new TextPart("plain")
            {
                Text = $@"// Title
{review.Title.Trim()}
                
// Names
{review.Name.Trim()}

// Text
{review.Text.Trim()}

Sincerely,
{reviewerEmail}"
            };

            await SendEmailAsync(message);
        }
    }
}