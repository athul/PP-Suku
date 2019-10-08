## What is PP-Suku?
**PP-Suku** is a Portfolio Generator made with Django,DRF and React. You Provide it data and **PP-Suku** will create a Portfolio website for you. It is **batteries included** 😁 so don't worry much about Setting up your System or anything. :wink: In the Near future you can just Fork this Repo and run a GH Action and You can get your stuff Deployed in your GitHub Pages

## What the F is this?
Basically PP-Suku is a Fun Side Project. I was a bit High on Coffee when I named this.(Suku is a name here for making Fun(no-offense))     

## Run this locally and wanna test this out?
Just go through these step by step. I'm assuming you've got **Python=3.x and node** installed

1. Create a Virtual Environment for python with either Pipenv or Virtualenv 
2. Install the dependencies with either `pipenv install` or `pip install -r requirments.txt`
3. Migrate to the DB and Create a SuperUser and start the Server 
```bash
python manage.py migrate && python manage.py createsuperuser && python manage.py runserver
```
4. *N.B The Username and password can be any of your choice and you can find the server in* `localhost:8000` . Add your data too in the Admin Dashboard.
5. Now We need to install React& its dependencies, Run `yarn install` or `npm install`
6. We need to run the webpack server for compiling the JavaScript for that run `yarn dev` or `npm run dev`
7. Now If you've added the data and check `localhost:8000` you can find the Portfolio page😄

PP-Suku is a Work in progress :sweaty_smile:        
![](Peek%202019-09-09%2012-15.gif)

Needed Stuff
- [ ] GitHub Action Script
- [ ] Better UI
- [ ] Authentications and Stuff
- [ ] Downloadable Build Files to Host Anywhere
- [ ] Better Forms to Input Data
