#### Build image, create and start database container
    
```
        docker-compose up -d --build
```

#### Install the project dependencies

```
        poetry install

#### Init the project dependencies

        poetry shell
        
#### Makemigrations for db
        
        python manage.py makemigrations
        python manage.py migrate
        
#### Start server

        python manage.py runserver
```
#### Install neccesary dependencies
```
        yarn

#### Launch the server

        yarn dev

