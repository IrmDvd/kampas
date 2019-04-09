package lt.project2.productControler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.project2.model.ProductModel;
import lt.project2.productService.ProductService;

@Api(value = "b")
@RestController
@RequestMapping(value = "/product")
@CrossOrigin
public class ProductControler {

	@Autowired
	ProductService servicepr;

	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get products", notes = "Returns all products")
	public List<ProductModel> getAllProducts() {

		return servicepr.getProducts();

	}

	@RequestMapping(method = RequestMethod.POST)
	public void addToProducts(@RequestBody ProductModel pr) {

		servicepr.addProduct(pr);
	}

	@RequestMapping(value = "/{idProduct}", method = RequestMethod.GET)
	public ProductModel getProductById(@PathVariable Long idProduct) {

		return servicepr.getProductById(idProduct);
	}

	@RequestMapping(value = "/{idProduct}", method = RequestMethod.DELETE)
	public void deleteFromProducts(@PathVariable Long idProduct) {

		servicepr.deleteProduct(idProduct);
	}
}
