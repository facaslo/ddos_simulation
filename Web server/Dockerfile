FROM node
WORKDIR "/web server"
COPY ./content/* .
EXPOSE 3000
RUN npm install
CMD ["npm" , "run" , "start"]