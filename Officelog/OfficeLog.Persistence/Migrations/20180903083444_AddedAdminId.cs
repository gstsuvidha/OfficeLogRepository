using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OfficeLog.Persistence.Migrations
{
    public partial class AddedAdminId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AdminId",
                table: "Marketings",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AdminId",
                table: "Companies",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Marketings_AdminId",
                table: "Marketings",
                column: "AdminId");

            migrationBuilder.CreateIndex(
                name: "IX_Companies_AdminId",
                table: "Companies",
                column: "AdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_Companies_Admin_AdminId",
                table: "Companies",
                column: "AdminId",
                principalTable: "Admin",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Marketings_Admin_AdminId",
                table: "Marketings",
                column: "AdminId",
                principalTable: "Admin",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Companies_Admin_AdminId",
                table: "Companies");

            migrationBuilder.DropForeignKey(
                name: "FK_Marketings_Admin_AdminId",
                table: "Marketings");

            migrationBuilder.DropIndex(
                name: "IX_Marketings_AdminId",
                table: "Marketings");

            migrationBuilder.DropIndex(
                name: "IX_Companies_AdminId",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "AdminId",
                table: "Marketings");

            migrationBuilder.DropColumn(
                name: "AdminId",
                table: "Companies");
        }
    }
}
