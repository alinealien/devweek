package com.dio_class.devweek.example.Repository;

import com.dio_class.devweek.example.Entity.IncidenciaExame;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OcorrenciaRepo extends JpaRepository<IncidenciaExame, Long> {
}
