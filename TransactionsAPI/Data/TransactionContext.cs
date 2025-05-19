using Microsoft.EntityFrameworkCore;
using TransactionsAPI.Models;

namespace TransactionsAPI.Data
{
    public class TransactionContext : DbContext
    {
        public TransactionContext(DbContextOptions options) : base(options) 
        {
        }

        public DbSet<Transaction> Transactions { get; set; }
    }
}
