package lt.project2;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lt.project2.model.ProductModel;
import lt.project2.productRepository.ProductRepository;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class Application {
	
	@Bean
	public CommandLineRunner demo(ProductRepository productRepository) {
		return (args) -> {
			// make entries to database
					// edit with real-life products?
			productRepository.save(new ProductModel("A210AR", 21, "354733"));
			productRepository.save(new ProductModel("B320", 22, "1643262"));
			productRepository.save(new ProductModel("R500", 23, "234252"));
			productRepository.save(new ProductModel("F16", 24, "2392572"));
			productRepository.save(new ProductModel("A213", 26, "9877"));
			productRepository.save(new ProductModel("G34", 6, "23415"));
			productRepository.save(new ProductModel("B543", 12, "2525"));
			productRepository.save(new ProductModel("C352", 15, "34534763"));
			productRepository.save(new ProductModel("D3252", 10, "859060"));
			
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
		SpringApplication.run(Application.class, args);
	}

}