using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using plugApi.Models;

namespace plugApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        string MyPolicy = "MyPolicy";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddDbContext<ApiContext>(options => options.UseMySql("server=localhost;port=3306;user=Control_CE_Port;password=warriors_team;database=plug_control", x => x.ServerVersion("10.4.14-mariadb")));
            services.AddControllers();
            services.AddTransient<IContainerRepositorio, ContainerRepositorio>();
            services.AddCors(options =>
            {
                options.AddPolicy(MyPolicy, builder =>
                {
                    builder.WithOrigins(
                        "http://localhost:8080",
                        "https://localhost:44331",
                        "http://localhost:4200"
                        )
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });
            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
            });
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseCors(MyPolicy);

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }
}
