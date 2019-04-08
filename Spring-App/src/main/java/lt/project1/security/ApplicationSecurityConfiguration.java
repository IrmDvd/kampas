package lt.project1.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Override
    protected void configure(HttpSecurity http) throws Exception {

		http
		.csrf().disable()
		.authorizeRequests()
		.antMatchers("/").permitAll()
		.anyRequest().authenticated()
		.and()
		.httpBasic();
	

	}
	@Bean
	@Override
	public UserDetailsService userDetailsService() {
		
		List<UserDetails> users = new ArrayList<>();
		users.add(User.withDefaultPasswordEncoder().username("Administratorius").password("admin").roles("USER", "ADMIN").build());
		users.add(User.withDefaultPasswordEncoder().username("Basic").password("basic").roles("USER").build());
		return new InMemoryUserDetailsManager(users);
	}
}
