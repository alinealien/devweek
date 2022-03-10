package com.dio_class.devweek.example.Repository;


import com.dio_class.devweek.example.Entity.Regiao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegiaoRepo extends JpaRepository<Regiao,Long> {
}
