using Microsoft.AspNetCore.Mvc;
using TransactionsAPI.Data;
using TransactionsAPI.Models.Dto;
using TransactionsAPI.Models.Entity;

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

        [HttpPost]
        public IActionResult AddTransaction(AddTransactionDTO addTransactionDto)
        {
            var transactionEntity = new Transaction()
            {
                DateOnly = addTransactionDto.DateOnly,
                TipoDeTransaccion = addTransactionDto.TipoDeTransaccion,
                ProductoId = addTransactionDto.ProductoId,
                Cantidad = addTransactionDto.Cantidad,
                PrecioUnitario = addTransactionDto.PrecioUnitario,
                PrecioTotal = addTransactionDto.PrecioTotal,
                Detalle = addTransactionDto.Detalle,
            };

            dbContext.Transactions.Add(transactionEntity);
            dbContext.SaveChanges();

            return Ok(transactionEntity);
        }


    }
}
