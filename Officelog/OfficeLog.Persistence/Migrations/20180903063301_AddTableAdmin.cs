using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OfficeLog.Persistence.Migrations
{
    public partial class AddTableAdmin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AdminId",
                table: "UserProfiles",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Admin",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admin", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_AdminId",
                table: "UserProfiles",
                column: "AdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserProfiles_Admin_AdminId",
                table: "UserProfiles",
                column: "AdminId",
                principalTable: "Admin",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserProfiles_Admin_AdminId",
                table: "UserProfiles");

            migrationBuilder.DropTable(
                name: "Admin");

            migrationBuilder.DropIndex(
                name: "IX_UserProfiles_AdminId",
                table: "UserProfiles");

            migrationBuilder.DropColumn(
                name: "AdminId",
                table: "UserProfiles");
        }
    }
}
