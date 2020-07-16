dir=$(pwd)
cd $dir

echo "export const services_uri='http://localhost:7000/graphql';" > src/utils/services_uri.js
echo "export const adalRedirectUri='http://localhost:3000';" >> src/utils/services_uri.js