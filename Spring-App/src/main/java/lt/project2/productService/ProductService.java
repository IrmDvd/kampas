package lt.project2.productService;

import java.util.List;

import org.springframework.http.ResponseEntity;

import lt.project2.model.ProductModel;

public interface ProductService {

	List<ProductModel> getProducts();

	void addProduct(ProductModel pr);

	void deleteProduct(Long idProduct);

	ResponseEntity<ProductModel> getProductById(Long idProduct);
	
	ProductModel editProductById(Long idProduct, ProductModel productEdited);
	

}
