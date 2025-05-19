﻿using Microsoft.EntityFrameworkCore;
using ProductsAPI.Models.Entity;
namespace ProductsAPI.Context
{
    public class ProductsContext : DbContext
    {
        public ProductsContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}
