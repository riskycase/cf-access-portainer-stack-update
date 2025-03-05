import core from "@actions/core";
import { HttpClient } from "@actions/http-client";

async function run() {
  try {
    const cfHeaderId = core.getInput("cf-client-id");
    const cfHeaderSecret = core.getInput("cf-client-secret");
    const endpoint = core.getInput("endpoint");
    const client = new HttpClient();
    await client.post(endpoint, "", {
      "CF-Access-Client-Id": cfHeaderId,
      "CF-Access-Client-Secret": cfHeaderSecret,
    });
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

run();
