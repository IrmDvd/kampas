package lt.project1.product.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.project1.product.model.ProductModel;
import lt.project1.product.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository repoProduct;

	@Override
	public List<ProductModel> getProducts() {

		return repoProduct.findAll();
	}

	@Override
	public void addProduct(ProductModel pr) {

		repoProduct.save(pr);

	}

	@Override
	public void deleteProduct(Long idProduct) {
		repoProduct.deleteById(idProduct);

	}

}
