namespace TransactionsAPI.Models
{
    public class Transaction
    {
        public Guid Id { get; set; }
        public DateOnly DateOnly { get; set; }
        public string? TipoDeTransaccion { get; set; }
        public int ProductoId { get; set; }
        public int Cantidad { get; set; }
        public double PrecioUnitario { get; set; }
        public double PrecioTotal { get; set; }
        public string? Detalle {  get; set; }

    }
}
