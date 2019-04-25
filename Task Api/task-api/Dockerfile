FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-stretch AS build
WORKDIR /src
COPY ["task-api/task-api.csproj", "task-api/"]
RUN dotnet restore "task-api/task-api.csproj"
COPY . .
WORKDIR "/src/task-api"
RUN dotnet build "task-api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "task-api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "task-api.dll"]