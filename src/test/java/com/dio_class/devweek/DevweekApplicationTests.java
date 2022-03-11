package com.dio_class.devweek;

import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.SQLException;

@SpringBootTest
class DevweekApplicationTests {

	public static void main(String[] args) throws SQLException {
		SpringApplication.run(DevweekApplication.class, args);}

	@Test
	void contextLoads() {
	}

}

