package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class LoopRequestUsingRepeat extends Simulation {

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept", "application/json")
    .header("content-type", "application/json")

  //Get List of users using get call
  def getListOfUsersList()={
    repeat(2) {
      exec(http("get all the list of users")
        .get("api/users?page=2")
        .check(status.in(200 to 204)))
      }
    }

  //Get List of Single user using get call
  def getSingleUserList()={
    repeat(2){
      exec(http("get single specific user details")
        .get("api/users/2")
        .check(status.in(200 to 204)))
    }
  }

//  Add or Create new user using post call
  def createNewUser()={
    repeat(5){
      exec(http("Add new user")
        .post("api/users")
        .body(RawFileBody("./src/test/resources/payloads/addUserPayload.json")).asJson
        .check(status.in(200 to 204)))
    }
  }

  val scn = scenario("To check the Loop concept of the Request")
    .exec(getListOfUsersList())
    .pause(3)
    .exec(getSingleUserList())
    .pause(3)
    .exec(createNewUser())
    .pause(3)

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
