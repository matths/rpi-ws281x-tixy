#!/bin/sh

# howto make a self-signed ssl certificate to serve via https
# https://stackoverflow.com/questions/42518513/https-server-with-self-signed-certificate
# http://www.akadia.com/services/ssh_test_certificate.html

COUNTRY="DE"
STATE="Germany"
LOCALITY="Berlin"
ORGANIZATION="Self Sign Inc."
COMMON_NAME="127.0.0.1"

# read -s -p "Enter Password: " PASSWD
PASSWD="passwd"

openssl genrsa -des3 -passout pass:${PASSWD} -out server.key 1024
openssl req -new -passin pass:${PASSWD} -subj "/C=${COUNTRY}/ST=${STATE}/L=${LOCALITY}/O=${ORGANIZATION}/CN=${COMMON_NAME}" -key server.key -out server.csr
mv server.key server.key.org
openssl rsa -passin pass:${PASSWD} -in server.key.org -out server.key

# possible fix for unable to write 'random state' error
# https://stackoverflow.com/questions/94445/using-openssl-what-does-unable-to-write-random-state-mean
# sudo rm ~/.rnd

openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

rm server.key.org
rm server.csr

rm -rf certs private
mkdir certs private

mv server.crt certs/
mv server.key private/
