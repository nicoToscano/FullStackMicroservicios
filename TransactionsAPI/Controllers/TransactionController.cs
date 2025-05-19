using Microsoft.AspNetCore.Mvc;
using TransactionsAPI.Data;

namespace TransactionsAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly TransactionContext dbContext;

        public TransactionController(TransactionContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllTransactions()
        {
            var allProducts = dbContext.Transactions.ToList();

            return Ok(allProducts);
        }


    }
}
