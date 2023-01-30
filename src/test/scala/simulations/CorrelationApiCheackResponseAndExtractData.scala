package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CorrelationApiCheckResponseAndExtractData extends Simulation {

  val httpConf = http.baseUrl("https://gorest.co.in/")
  .header("Authorization","Bearer 469dc46c06a83ab7f6a3c46fcde8a01af15b83088e4a51fe00bf1bfa6d76b26b")

  val scn = scenario("To check Api Correlation")

    //1st call to get all the list of users
    .exec(http("to get list of users")
      .get("public-api/users")
      .check(jsonPath("$.data[1].id").saveAs("userId")))

    .pause(5)

    //2nd call get the specific user details
    .exec(http("get the specific user")
      .get("public-api/users/${userId}")
      .check(jsonPath("$.data.id").is("3177"))
      .check(jsonPath("$.data.name").is("Devangana Pilla"))
      .check(jsonPath("$.data.email").is("pilla_devangana@stracke-fahey.org")))

  setUp(scn.inject(atOnceUsers(100))).protocols(httpConf)

}
