package lt.project2;

import lt.project2.model.ProductModel;
import lt.project2.productRepository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class SandelysApplication {


	/*	public ProductModel(String sku, int qty, double height, double weight, double length, double width) {
		super();
		this.sku = sku;
		this.qty = qty;
		this.height = height;
		this.weight = weight;
		this.length = length;
		this.width = width;
	}*/


	@Bean
	public CommandLineRunner demo(ProductRepository productRepository) {
		return (args) -> {
			// make entries to database
					// edit with real-life products?
			productRepository.save(new ProductModel("AP3358", 25, 13.0, 0.5, 0.7, 16));
			productRepository.save(new ProductModel("ZT-9944", 1, 1.00, 3.00, 60.0, 5460.0));
			productRepository.save(new ProductModel("00_a", 122, 13.00, 65.00, 111.0, 50.0));
			productRepository.save(new ProductModel("35-aW!",9, 10.03, 30.00, 660.0, 350.0));
			productRepository.save(new ProductModel("??????", 71, 08.00, 33., 67.0, 99.0));
			productRepository.save(new ProductModel("PO233", 206, 54.00, 34.00, 787.0, 90.0));
			productRepository.save(new ProductModel("NULL", 0, 44.00, 457.00, 60.0, 17.0));

		};
	}

	@Bean
	public Docket swaggerDocket() {


		return new Docket(DocumentationType.SWAGGER_2)

				.apiInfo(apiInfo()).select()

				.apis(RequestHandlerSelectors.basePackage("lt.project2"))

				.build();

	}

	private ApiInfo apiInfo() {

		return new ApiInfoBuilder().title("Products").version("0.0.1-SNAPSHOT").build();
	}

	public static void main(String[] args) {
		SpringApplication.run(SandelysApplication.class, args);
	}




}
