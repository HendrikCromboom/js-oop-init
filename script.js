function Story(title, name, language, duration) {
    this.title = title;
    this.name = name;
    this.language = language;
    this.duration = duration;
}
Story.prototype.tellStory = function () {
    return this.title + "! My name is " + this.name + ", I have been learning " + this.language + " for about " + this.duration + "...";
};
var story1 = new Story("Hello World", "Hendrik", "JavaScript", "1 months");
alert(story1.tellStory());
