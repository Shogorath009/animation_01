function test() {
    setElementPosition("messa",100,100);
    setElementPosition("messa2",150,150);
    moveElement("messa",300,300,10);
    moveElement("messa2",500,500,5);
}
addLoadEvent(test);
