use Time4Trivia;

create table if not exists Questions {
	QuestionId NOT NULL AUTO_INCREMENT,
	Question varchar(100) NOT NULL,
	correct_answer varchar(100) NOT NULL
}

ALTER TABLE Users
ADD Score varchar(100);

INSERT INTO Questions (Question, correct_answer)
VALUES ('The United States Department of Homeland Security was formed in response to 9/11', 'true'),
INSERT INTO Questions (Question, correct_answer) 
VALUES ('Super Mario Bros. was released in 1990.', 'false'),
INSERT INTO Questions (Question, correct_answer) 
VALUES ('In Norse mythology, Thor once dressed as a woman.', 'true'),
INSERT INTO Questions (Question, correct_answer)
VALUES ('Greenland is covered with grass and Iceland is covered with ice', 'false'),
INSERT INTO Questions (Question, correct_answer) 
VALUES ('Ferrari has never made a V10 engine for any of its cars.', 'false'),
INSERT INTO Questions (Question, correct_answer) 
VALUES ('The set of all algebraic numbers is countable.', 'true'),
INSERT INTO Questions (Question, correct_answer)
VALUES ('Stagecoach owned South West Train before losing the rights to FirstGroup and MTR in March of 2017.', 'true'),
INSERT INTO Questions (Question, correct_answer)
VALUES ('Is Tartu the capital of Estonia?', 'false'),
INSERT INTO Questions (Question, correct_answer)
VALUES ('Pointers were not used in the original C programming language; they were added later on in C++.', 'false'),


