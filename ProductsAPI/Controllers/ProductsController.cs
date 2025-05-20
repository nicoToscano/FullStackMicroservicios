using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductsAPI.Data;
using ProductsAPI.Models.Entity;
using ProductsAPI.Models.Dto;
using Microsoft.AspNetCore.Cors;

namespace ProductsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductsContext dbContext;

        public ProductsController(ProductsContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var allProducts = dbContext.Products.ToList();

            return Ok(allProducts);
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            var productById = dbContext.Products.Find(id);

            if (productById == null) 
            {
                return NotFound();
            }

            return Ok(productById);
        }

        [HttpPost]
        public IActionResult AddProduct(AddProductDTO addProductDto)
        {
            var productEntity = new Product()
            {
                Nombre = addProductDto.Nombre,
                Categoria = addProductDto.Categoria,
                Descripcion = addProductDto.Descripcion,
                Imagen = addProductDto.Imagen,
                Precio = addProductDto.Precio,
                Stock = addProductDto.Stock,
            };

            dbContext.Products.Add(productEntity);
            dbContext.SaveChanges();

            return Ok(productEntity);
        }

        [EnableCors("_myAllowSpecificOrigins")]
        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, UpdateProductDTO updateProductDTO)
        {
            var product = dbContext.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            product.Nombre = updateProductDTO.Nombre;
            product.Descripcion = updateProductDTO.Descripcion;
            product.Categoria = updateProductDTO.Categoria;
            product.Imagen = updateProductDTO.Imagen;
            product.Precio = updateProductDTO.Precio;
            product.Stock = updateProductDTO.Stock;

            dbContext.SaveChanges();

            return Ok(product);            
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = dbContext.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            dbContext.Products.Remove(product);
            dbContext.SaveChanges();

            return Ok();
        }


    }
}
