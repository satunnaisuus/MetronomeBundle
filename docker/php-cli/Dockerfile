FROM php:8.1-cli

RUN apt-get update && apt-get install -y \
    unzip \
    wget \
    git \
    libicu-dev \
    libzip-dev \
    libxml2-dev \
    libxslt-dev \
    --no-install-recommends
RUN docker-php-ext-configure intl
RUN docker-php-ext-install intl zip xml xsl
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/bin --filename=composer --2 --quiet

WORKDIR /bundle
