class movie {
    constructor(movieName, movieLength, movieGenre, editor, producer, country, resolution, watch){
        this.movieName = movieName
        this.movieLength = movieLength
        this.movieGenre = movieGenre
        this.editor = editor
        this.producer = producer
        this.country = country
        this.resolution = resolution
        this.watch = true
        
    }
    
    skip(){};
    pause(){};
}


class addmovie extends movie{
    constructor(movieName, movieLength, producer, watch){
        super();
        this.movieName = "Avenger"
        this.movieLength = '2hours 34minutes'
        this.producer = 'Orwel jay' 
        this.watch = true       
    }

    pause(play){
        if (play == this.watch) {
            console.log('it will take', this.movieLength);            
        } else {
            console.log('please play to watch');
        }
    }

    skip(x,y){
        console.log(`you've skipped the movie from = (${x}, ${y})`);
    }
}

