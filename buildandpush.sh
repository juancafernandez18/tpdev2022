#!/bin/bash

echo "Subiendo Mis imagenes a Container Registry"
filename="version"

while read -r line; do
   # echo "$line"
    docker tag backend $CI_REGISTRY/juanca.fernandez18/laboratorio1_ayd2:backend${line}
    docker tag backend $CI_REGISTRY/juanca.fernandez18/laboratorio1_ayd2:frontend${line}
    docker tag backend $CI_REGISTRY/juanca.fernandez18/laboratorio1_ayd2:mysql-db${line}

    docker push $CI_REGISTRY/juanca.fernandez18/laboratorio1_ayd2:backend${line}
    docker push $CI_REGISTRY/juanca.fernandez18/laboratorio1_ayd2:frontend${line}        
    docker push $CI_REGISTRY/juanca.fernandez18/laboratorio1_ayd2:mysql-db${line}       
echo "FIN DEL SCRIPT"
done < "$filename"




