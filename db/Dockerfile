FROM postgres:13.4
ENV POSTGRES_USER direcional
ENV POSTGRES_PASSWORD direcionalempresas
ENV POSTGRES_DB direcional
# ADD ./migration/*.sql /docker-entrypoint-initdb.d/
RUN echo "America/Sao_Paulo" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata
RUN apt-get update
RUN apt-get --only-upgrade install tzdata
RUN zdump -v Brazil/East | grep 2019