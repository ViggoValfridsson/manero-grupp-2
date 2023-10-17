using WebAPI.Data;
using WebAPI.Helpers.Repositories;
using WebAPI.Helpers.Services;

namespace WebAPITest;

[Collection("Database collection")]
public class ProductServiceTests
{
    private readonly DatabaseFixture _fixture;
    private readonly DataContext _context;
    private readonly ProductRepo _productRepo;
    private readonly ProductService _productService;

    public ProductServiceTests(DatabaseFixture fixture)
    {
        _fixture = fixture;
        _context = _fixture.CreateContext();
        _productRepo = new ProductRepo(_context);
        _productService = new ProductService(_productRepo);
    }

    [Fact]
    public async Task GetAllAsync_ShouldReturnAllProducts()
    {
        //var context = _fixture.CreateContext(); // Access the context from the fixture
        //var productRepo = new ProductRepo(context);
        //var productService = new ProductService(productRepo);

        // Act
        var result = await _productService.GetAllAsync();

        // Assert
        Assert.Equal(4, result.Count);
    }

    [Theory]
    [InlineData("Pants", 2)]
    [InlineData("pAnTS", 2)]
    [InlineData("Shirts", 2)]
    [InlineData("Shoes", 0)]
    [InlineData("MadeUpCategory", 0)]
    public async Task GetAllByCategoryAsync_ShouldReturnAllRelevantProducts(string categoryName, int expectedAmount)
    {
        var result = await _productService.GetAllByCategoryAsync(categoryName);

        Assert.Equal(expectedAmount, result.Count);
    }
}