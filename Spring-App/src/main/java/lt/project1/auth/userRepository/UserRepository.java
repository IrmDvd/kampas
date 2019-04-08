package lt.project1.auth.userRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.project1.auth.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long> {

		UserModel findByName(String name);
}
