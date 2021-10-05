class Item {
    foodName:  String;
    foodType: String;
    expirationDate:  String;
    location:  String;
    inputDate:  String;
    googleId: String;
    userId: String;
  constructor(data: any) {
    this.foodName = data.foodName;
    this.foodType = data.foodType;
    this.expirationDate = data.expirationDate;
    this.location = data.location;
    this.inputDate = data.inputDate;
    this.googleId = data.googleId;
    this.userId = data.userId;
  }
  moveTo(location: String) {
    this.location = location;
  }
}

export default Item;