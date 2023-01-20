import userRouter from "../components/user/user";

export default (app: any) => {
    app.use("/api/v1/users", userRouter);
}