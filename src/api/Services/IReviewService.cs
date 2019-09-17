using System.Threading.Tasks;
using api.Models;

namespace api.Services
{
    public interface IReviewService
    {
        Task SubmitReviewAsync(Review review);
    }
}