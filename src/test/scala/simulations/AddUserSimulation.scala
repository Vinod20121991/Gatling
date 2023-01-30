package simulations

//imports
import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class AddUserSimulation extends Simulation {

  //http configuration
  val httpConf = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")

  //Scenario
  val scn = scenario("create user")
    .exec(http(requestName = "Post Request")
      .post("/api/users").body(RawFileBody("./src/test/resources/payloads/addUserPayload.json")).asJson //covert raw file body into json format by using asJson function
      .check(status is   201))
    .pause(3)
    .exec(http(requestName = "get all users of page 2")
      .get("/api/users/2")
      .check(status is 200 ))

  //setUp function
  setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf)

}


