package lt.project2.productService;

import java.util.List;

import lt.project2.model.ProductModel;

public interface ProductService {

	List<ProductModel> getProducts();

	void addProduct(ProductModel pr);

	void deleteProduct(Long idProduct);

	ProductModel getProductById(Long idProduct);

}
