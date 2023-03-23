enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  console.log(recipient, message);
}

respond("hallo mang", UserResponse.Yes)