package lt.project1.ThisuserDetailService;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import lt.project1.auth.UserModel;
import lt.project1.auth.userRepository.UserDetailsImpl;
import lt.project1.auth.userRepository.UserRepository;

public class ThisUserDetailService implements UserDetailsService{
	
	
	private final UserRepository userRepository;
	
	

	public ThisUserDetailService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}



	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel user = this.userRepository.findByName(username);
		if(null==user) {
			throw new UsernameNotFoundException("Niera useriuko: " + username);
		}
		return new UserDetailsImpl(user);
	}

}
