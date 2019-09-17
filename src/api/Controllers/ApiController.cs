using System;
using System.Threading.Tasks;
using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api")]
    [ApiController]
    public sealed class ApiController : Controller
    {
        private readonly IReviewService _reviewService;
        public ApiController(IReviewService reviewService)
        {
            _reviewService = reviewService ?? throw new ArgumentNullException(nameof(reviewService));
        }

        [HttpPost("reviews")]
        public async Task<IActionResult> SubmitReviewAsync([FromBody] Review request)
        {
            try
            {
                await _reviewService.SubmitReviewAsync(request);
                return Ok();
            }
            catch (Exception ex)
            {
                return UnprocessableEntity(ex.Message);
            }
        }
    }
}
