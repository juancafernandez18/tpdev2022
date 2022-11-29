#!/bin/bash

echo "Subiendo las imagenes a Container Registry"
filename="version"

while read -r line; do
   echo "$line"
    docker tag backend $CI_REGISTRY/juanca.fernandez18/tpdevops2022:backend${line}
    docker tag backend $CI_REGISTRY/juanca.fernandez18//tpdevops2022:frontend${line}
    docker tag backend $CI_REGISTRY/juanca.fernandez18/tpdevops2022:mysql-db${line}

    docker push $CI_REGISTRY/juanca.fernandez18//tpdevops2022:backend${line}
    docker push $CI_REGISTRY/juanca.fernandez18//tpdevops2022:frontend${line}        
    docker push $CI_REGISTRY/juanca.fernandez18//tpdevops2022:mysql-db${line}       
echo "FIN DEL SCRIPT"
done < "$filename"




