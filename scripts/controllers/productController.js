const ProductSERVICE = new WeakMap();
class ProductController {
    constructor(products, productService) {
        ProductSERVICE.set(this, productService);
        this.products = products;
    }
    removeProduct(index) {
        var msg = this.products[index].id + " is removed from the products list";
        ProductSERVICE.get(this).pushNotification(msg);
        this.products.splice(index, 1);
        ProductSERVICE.get(this).setProducts(this.products);
    }
}
ProductController.$inject = ['products', 'productService'];
export default ProductController;
