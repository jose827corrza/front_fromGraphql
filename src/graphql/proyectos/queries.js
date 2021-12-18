import { gql } from '@apollo/client';

const PROYECTOS = gql`
  query Proyectos {
    Proyectos {
      _id
      nombre
      estado
      objetivos {
        descripcion
        tipo
      }
      lider {
        _id
        correo
        nombre
      }
      inscripciones {
        estado
        estudiante {
          _id
        }
      }
    }
  }
`;

const PROYECTO = gql`
  query Proyecto($_id: String!){
    Proyecto(_id: $_id){
      _id 
      nombre
      estado
      objetivos {
        descripcion
        tipo
      }
      lider {
        _id
        correo
        nombre
      }
    }
  }
`;

export { PROYECTOS, PROYECTO };
