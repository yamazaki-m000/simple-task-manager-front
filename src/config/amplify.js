import Amplify from "aws-amplify";

export function amplify_initialize() {
    Amplify.configure({
        API: {
            endpoints: [
                {
                    name: "simple-task-manager-api",
                    endpoint: "https://s2z644n78l.execute-api.ap-northeast-1.amazonaws.com/prd",
                    region: "ap-northeast-1"
                }
            ]
        }
    });
}
