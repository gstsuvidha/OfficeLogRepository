using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OfficeLog.Persistence.Migrations
{
    public partial class changesInCompanyAndMarketing : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CurrentScenario",
                table: "Marketings",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "Marketings",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "RateUsForNo",
                table: "Marketings",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RateUsForNo",
                table: "Companies",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrentScenario",
                table: "Marketings");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Marketings");

            migrationBuilder.DropColumn(
                name: "RateUsForNo",
                table: "Marketings");

            migrationBuilder.DropColumn(
                name: "RateUsForNo",
                table: "Companies");
        }
    }
}
