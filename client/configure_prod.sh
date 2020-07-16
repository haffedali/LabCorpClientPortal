dir=$(pwd)
cd $dir

gql_endpoint="/graphql"
ngrok_url=$(curl --location --request GET 'http://localhost:4040/api/tunnels' | jq -r '.tunnels[0] .public_url')$gql_endpoint

if [ "${ngrok_url:0:5}" != "https" ]
then
  ngrok_url="https${ngrok_url:4}"
fi

echo "export const services_uri='$ngrok_url';" > src/utils/services_uri.js
echo "export const adalRedirectUri='https://azlccpafswa.azurewebsites.net/';" >> src/utils/services_uri.js