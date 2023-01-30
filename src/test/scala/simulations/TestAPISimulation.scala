package simulations

//need to add three imports, scenario.Simulation,core.Predef._ , http.Predef._

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TestAPISimulation extends Simulation
{
  //http Configuration
 val httpConf= http.baseUrl("https://reqres.in")
    .header("Accept",value = "application/json")
    .header("content-type",value="application/json")


  //Scenario
  val scn = scenario(scenarioName = "get users request")
    .exec(http(requestName = "get request").get("/api/users?page=2").check(status is 200))


  //setUp function to execute the mentioned scenario
  setUp(scn.inject(atOnceUsers(100))).protocols(httpConf)

}
