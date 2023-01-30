var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "412",
        "ok": "412",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "952",
        "ok": "952",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "percentiles1": {
        "total": "869",
        "ok": "869",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1230",
        "ok": "1230",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1538",
        "ok": "1538",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1680",
        "ok": "1680",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.875",
        "ok": "1.875",
        "ko": "-"
    }
},
contents: {
"req_to-get-list-of--d40d0": {
        type: "REQUEST",
        name: "to get list of users",
path: "to get list of users",
pathFormatted: "req_to-get-list-of--d40d0",
stats: {
    "name": "to get list of users",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1017",
        "ok": "1017",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1329",
        "ok": "1329",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1237",
        "ok": "1237",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1537",
        "ok": "1537",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1598",
        "ok": "1598",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1710",
        "ok": "1710",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 40
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.938",
        "ok": "0.938",
        "ko": "-"
    }
}
    },"req_get-the-specifi-e0545": {
        type: "REQUEST",
        name: "get the specific user",
path: "get the specific user",
pathFormatted: "req_get-the-specifi-e0545",
stats: {
    "name": "get the specific user",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "412",
        "ok": "412",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "721",
        "ok": "721",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles1": {
        "total": "562",
        "ok": "562",
        "ko": "-"
    },
    "percentiles2": {
        "total": "607",
        "ok": "607",
        "ko": "-"
    },
    "percentiles3": {
        "total": "681",
        "ok": "681",
        "ko": "-"
    },
    "percentiles4": {
        "total": "713",
        "ok": "713",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.938",
        "ok": "0.938",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
