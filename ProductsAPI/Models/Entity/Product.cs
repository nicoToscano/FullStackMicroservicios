namespace ProductsAPI.Models.Entity
{
    public class Product
    {
        public int Id { get; set; }
        public required string Nombre { get; set; }
        public required string Descripcion { get; set; }
        public required string Categoria { get; set; }
        public required string Imagen {  get; set; }
        public required double Precio { get; set; }
        public required int Stock { get; set; }
    }
}
