package lt.project1.product.service;

import java.util.List;

import lt.project1.product.model.ProductModel;

public interface ProductService {

	List<ProductModel> getProducts();

	void addProduct(ProductModel pr);
	
	void deleteProduct(Long idProduct);

}
